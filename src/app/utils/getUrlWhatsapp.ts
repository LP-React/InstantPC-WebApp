const whatsappNumber = "51923225506";

export const getUrlWhatsapp = ( gameName : string): string => {
    return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hola%2Cdeseo+jugar+${gameName}&type=phone_number&app_absent=0`;
}