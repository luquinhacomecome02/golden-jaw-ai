// Centralized site config
export const WHATSAPP_NUMBER = "5500000000000"; // Placeholder — substituir
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Dr. Odeni, gostaria de agendar uma avaliação."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const DOCTOR = {
  name: "Dr. Odeni Woelbert",
  title: "Cirurgião Bucomaxilofacial",
  cro: "CRO 52551",
  rqe: "RQE 00000",
  specialties: "DTM | Ortognática | Implantes | Sisos | Prótese Facial",
  specialtiesLong:
    "Especialista em DTM, Ortognática, Implantes, Sisos e Prótese Facial",
};