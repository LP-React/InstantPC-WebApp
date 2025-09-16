import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const company = [
    {
      link: "/what-is-instantpc",
      text: "What is InstantPC?",
    },
    {
      link: "/terms-of-use",
      text: "Terms of use",
    },
    {
      link: "/installation",
      text: "Installation Guide",
    },
    {
      link: "/support",
      text: "Help - FAQ",
    },
  ];

  const contact = [
    {
      link: "https://www.facebook.com/people/Instantpc/61577183313563/#",
      text: "Facebook",
      icon: Facebook,
    },
    {
      link: "https://www.instagram.com/instantpc.pe",
      text: "Instagram",
      icon: Instagram,
    },
    {
      link: "https://api.whatsapp.com/send/?phone=51923225506",
      text: "Whatsapp",
      icon: Phone,
    },
    {
      link: "mailto:instantpc.pe@gmail.com?subject=Consulta&body=Hola+quiero+más+información",
      text: "Gmail",
      icon: Mail,
    },
    {
      link: "https://youtube.com/@instantpc-pe?si=gVZ5N5gZTEvKPeiw",
      text: "Youtube",
      icon: Youtube,
    },
  ];

  const forGamers = [
    {
      link: "/gaming/games",
      text: "Games",
    },
    {
      link: "/systems",
      text: "Gaming systems",
    },
    {
      link: "/support-gamers",
      text: "Help - FAQ",
    },
  ];

  const forProfesionals = [
    {
      link: "/profesionals",
      text: "Solutions",
    },
    {
      link: "/programs",
      text: "Programs",
    },
    {
      link: "/systems",
      text: "Profesional systems",
    },
    {
      link: "/support-professionals",
      text: "Help - FAQ",
    },
  ];

  return (
    <div className="w-full border-t-2 pt-8">
      <div className="m-auto flex w-[80%] items-center justify-between">
        <div className="w-[25%] border-r-2 border-dotted border-gray-400 pr-6">
          <Link href="/">
            <Image
              src="/instantpc_logo_black_color.png"
              width={120}
              height={30}
              alt="InstantPC-Logo"
              className="cursor-pointer"
            />
          </Link>

          <p className="mt-4 pl-1">
            Access high-end PCs remotely for work or gaming, without spending on
            expensive hardware or software, all from home.
          </p>
        </div>
        <div className="flex w-[45%] justify-between space-x-2.5 px-4">
          <div className="w-[30%]">
            <h6 className="border-b-1 border-dotted border-gray-400 pl-1">
              About us
            </h6>
            <ul className="mt-2 pl-1">
              {company.map((option) => (
                <li key={option.text}>
                  <Link href={option.link}>{option.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[30%]">
            <h6 className="border-b-1 border-dotted border-gray-400 pl-1">
              For profesionals
            </h6>
            <ul className="mt-2 pl-1">
              {forProfesionals.map((option) => (
                <li key={option.text}>
                  <Link href={option.link}>{option.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[30%]">
            <h6 className="border-b-1 border-dotted border-gray-400 pl-1">
              For gamers
            </h6>
            <ul className="mt-2 pl-1">
              {forGamers.map((option) => (
                <li key={option.text}>
                  <Link href={option.link}>{option.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[25%] border-l-2 border-dotted border-gray-400 pl-6">
          <h6 className="border-b-1 border-dotted border-gray-400 pl-1">
            Contact us:
          </h6>
          <ul className="mt-2 flex flex-wrap justify-between pl-1">
            {contact.map(({ link, text, icon: Icon }) => (
              <li key={text} className="w-[40%] py-2">
                <Link
                  href={link}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Icon size={18} />
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-slate-900 py-2 text-center text-white">
        <h6>
          Copyright © InstantPC by{" "}
          <a
            href="https://github.com/LP-React"
            target="_blank"
            className="font-semibold transition hover:text-fuchsia-400"
          >
            - LP-React -
          </a>{" "}
          . All Rights Reserved.
        </h6>
      </div>
    </div>
  );
};
