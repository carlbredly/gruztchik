import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FastOrderFormProps {
  titre?: string;
  placeholderTache?: string;
  placeholderAdresse?: string;
  placeholderEmail?: string;
  placeholderPhone?: string;
  labelPersonnes?: string;
  labelHeures?: string;
  bouton?: string;
  disclaimer?: string;
}

export default function FastOrderForm({
  titre = "Contact us",
  placeholderTache = "Que faut-il faire ?",
  placeholderAdresse = "Adresse",
  placeholderEmail = "Votre email",
  placeholderPhone = "Numéro de téléphone",
  labelPersonnes = "Nombre de personnes",
  labelHeures = "Nombre d'heures",
  bouton = "Demander",
  disclaimer = "En cliquant sur le bouton, vous acceptez les conditions d'utilisation et la politique de confidentialité."
}: FastOrderFormProps) {
  const [formData, setFormData] = useState({
    task: "",
    address: "",
    people: 0,
    hours: 4, // valeur par défaut
    date: "",
    time: "",
    phone: "",
    email: "", // nouveau champ email
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendRequest = () => {
    if (!formData.phone || !formData.email) {
      alert("Veuillez entrer un numéro de téléphone et un email.");
      return;
    }

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        task: formData.task,
        address: formData.address,
        people: formData.people,
        hours: formData.hours,
        date: formData.date,
        time: formData.time,
        phone: formData.phone,
        email: formData.email,
      },
      "YOUR_PUBLIC_KEY"
    ).then(() => {
      alert("Votre demande a été envoyée ✅");
    }).catch(() => {
      alert("Erreur lors de l'envoi ❌");
    });
  };

  return (
    <div className="w-full lg:max-w-md p-4 sm:p-6 bg-white rounded-3xl shadow-lg space-y-3 sm:space-y-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 sm:mb-5">{titre}</h1>

      <input
        type="text"
        name="task"
        placeholder={placeholderTache}
        onChange={handleChange}
        className="input w-full px-3 py-2.5 text-sm sm:text-base rounded-lg bg-[#bcbce029] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="text"
        name="address"
        placeholder={placeholderAdresse}
        onChange={handleChange}
        className="input w-full px-3 py-2.5 text-sm sm:text-base rounded-lg bg-[#bcbce029] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"  />

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex flex-col flex-1">
          <label className="text-xs sm:text-sm mb-1">{labelPersonnes}</label>
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 justify-between bg-[#bcbce029]">
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-sm sm:text-base" onClick={() => setFormData({ ...formData, people: Math.max(0, formData.people - 1) })}>−</button>
            <span className="text-sm sm:text-base">{formData.people}</span>
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-sm sm:text-base" onClick={() => setFormData({ ...formData, people: formData.people + 1 })}>+</button>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <label className="text-xs sm:text-sm mb-1">{labelHeures}</label>
          <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 justify-between bg-[#bcbce029]">
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-sm sm:text-base" onClick={() => setFormData({ ...formData, hours: Math.max(1, formData.hours - 1) })}>−</button>
            <span className="text-sm sm:text-base">{formData.hours}</span>
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-sm sm:text-base" onClick={() => setFormData({ ...formData, hours: formData.hours + 1 })}>+</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="input flex items-center gap-2 rounded-lg bg-[#bcbce029] border border-gray-200 px-3 py-2 flex-1">
          <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
          <input type="date" name="date" onChange={handleChange} className="flex-1 outline-none bg-transparent text-sm sm:text-base" />
        </div>

        <div className="input flex items-center gap-2 rounded-lg bg-[#bcbce029] border border-gray-200 px-3 py-2 flex-1">
          <Clock size={16} className="sm:w-[18px] sm:h-[18px]" />
          <input type="time" name="time" onChange={handleChange} className="flex-1 outline-none bg-transparent text-sm sm:text-base" />
        </div>
      </div>

      <input
        type="email"
        name="email"
        placeholder={placeholderEmail}
        onChange={handleChange}
        className="input w-full px-3 py-2.5 text-sm sm:text-base rounded-lg bg-[#bcbce029] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input
        type="tel"
        name="phone"
        placeholder={placeholderPhone}
        onChange={handleChange}
        className="input w-full px-3 py-2.5 text-sm sm:text-base rounded-lg bg-[#bcbce029] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <button
        onClick={sendRequest}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-colors">
        {bouton}
      </button>

      <p className="text-xs text-gray-500 text-center leading-relaxed">
        {disclaimer}
      </p>
    </div>
  );
}

