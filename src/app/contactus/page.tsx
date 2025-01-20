'use client';
import * as React from "react";

interface ContactInfoProps {
  title: string;
  details: string[];
  icon: string;
  className?: string;
}

interface OfficeLocationProps {
  title: string;
  address: string;
  contacts: Array<{
    type: string;
    details: string[];
    icon: string;
  }>;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, details, icon, className = "" }) => (
  <div className={`flex gap-5 items-center ${className}`}>
    <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-square w-[65px]" />
    <div className="flex overflow-hidden flex-col items-start py-px min-w-[240px]">
      <div className="text-lg font-light leading-none uppercase text-zinc-700">
        {title}
      </div>
      <div className="mt-4 text-2xl leading-none text-slate-800">
        {details.map((detail, index) => (
          <div key={index} className="mt-1.5 first:mt-0">
            {detail}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OfficeLocation: React.FC<OfficeLocationProps> = ({ title, address, contacts }) => (
  <div className="flex relative flex-col md:flex-row  px-14 py-6 min-h-[260px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="flex  right-0 bottom-0 z-0 flex-col md:flex-row max-w-full  ">
      <div className="flex flex-row  bg-white shadow-[0px_2px_25px_rgba(0,33,91,0.2)] max-md:pr-5 max-md:max-w-full">
        <div className="flex shrink-0 bg-emerald-600 w-[7px]" />
            <div className="flex z-0 flex-col max-w-full w-[362px]">
                <div className="text-sm mt-3 ml-2 font-light leading-none uppercase text-zinc-700">
                    {title}
                </div>
                <div className="mt-3 text-3xl leading-10 text-sky-950">
                    {address}
                </div>
            </div>
      </div>
    <div className="flex flex-col gap-8 md:ml-24 mt-8">
      {contacts.map((contact, index) => (
        <ContactInfo
          key={index}
          title={contact.type}
          details={contact.details}
          icon={contact.icon}
        />
      ))}
    </div>
    </div>
  </div>
);

function ContactPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white max-md:py-24">
      <div className="flex relative flex-col px-16 pt-96 pb-10 w-full text-lg font-bold leading-loose text-gray-200 min-h-[419px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd73574a03f64e1fbc6d8369d5a3cdbdd0b23dd69a3016d3908e77d6226e2f41?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="Contact page header background"
          className="object-cover absolute inset-0 size-full"
        />
        <nav aria-label="Breadcrumb">
          <span>Home / Contacts</span>
        </nav>
      </div>

      <div className="flex flex-col items-start self-center mt-16 ml-2.5 max-w-full w-[1200px] max-md:mt-10">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap gap-10 self-stretch mr-2.5 text-2xl font-light text-black text-opacity-50 max-md:max-w-full">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <label htmlFor="fullName" className="sr-only">Your Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="px-8 py-5 bg-white rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.14)] max-md:px-5 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <label htmlFor="email" className="sr-only">Your Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="px-8 py-5 bg-white rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.14)] max-md:px-5 max-md:max-w-full"
              />
            </div>
          </div>

          <h1 className="mt-5 text-6xl font-semibold leading-none text-white max-md:text-4xl">
            Contacts
          </h1>

          <div className="flex flex-wrap gap-10 self-stretch mr-2.5 mt-10 text-2xl font-light text-black text-opacity-50 max-md:max-w-full">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <label htmlFor="phone" className="sr-only">Your Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="px-8 py-5 bg-white rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.14)] max-md:px-5 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <label htmlFor="address" className="sr-only">Your Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                className="px-8 py-5 bg-white rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.14)] max-md:px-5 max-md:max-w-full"
              />
            </div>
          </div>

          <div className="mt-10">
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message Here..."
              className="self-stretch w-full px-8 pt-5 pb-24 mt-10 text-2xl font-light bg-white rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.14)] text-black text-opacity-50 max-md:px-5 max-md:pb-28 max-md:mt-10 max-md:max-w-full"
            />
          </div>

          <button
            type="submit"
            className="flex gap-1.5 px-5 py-6 mt-16 text-white bg-emerald-600 max-md:mt-10 max-md:ml-0.5"
          >
            <span className="grow text-xl leading-tight text-right">Submit Message</span>
          </button>
        </form>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70b9d7c80f35c0fe094001b5ed5428aeadb8fff754024f55b0cc38a246d12619?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
          alt="Location map"
          className="object-contain mt-16 ml-3 w-full aspect-[2.67] max-md:mt-10 max-md:max-w-full"
        />

        <div className="mt-20 ml-3 max-w-full w-[1023px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <OfficeLocation
                title="Head Office"
                address="Fine Engineering Works Limited Kyang'ombe Road P.O. Box 32512-00600 Nairobi, Kenya"
                contacts={[
                  {
                    type: "Company Phones",
                    details: [
                      "Esmail Elias - +254 733 610886",
                      "Mohamed Elias - +254 733 604403",
                      "Imran Elias - +254 735 222206"
                    ],
                    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f508a071fb66a83e2b66620579487336983ad4b075623dfca9d27b2e4686efd9?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  },
                  {
                    type: "Emails",
                    details: ["fine.eng2006@hotmail.com", "fineeng1983@gmail.com"],
                    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f905c704d53bb10d9ee5531618742ea42064800768237866a37d25ca6d90857e?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  },
                  {
                    type: "Website",
                    details: ["www.fineeng.co.ke"],
                    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8aaea263-0f22-4d84-83ac-005e041c94e3?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  }
                ]}
              />
              <OfficeLocation
                title="Uganda Office"
                address="Physical Address: Tirupati Business Park, Warehouse number 19 Off the Northern Bypass, Kyebando, Kampala, Uganda P.O. Box 26330, Kampala, Uganda"
                contacts={[
                  {
                    type: "Company Phones",
                    details: ["+256 713111155", "+256 758340956"],
                    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f508a071fb66a83e2b66620579487336983ad4b075623dfca9d27b2e4686efd9?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  },
                  {
                    type: "Emails",
                    details: ["info@fineeng.co.ke"],
                    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/818e8f18c1fa90b774d753b035f0cd4f1952dbb461614d40a95295f2c6e6e50b?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  },
                  {
                    type: "Website",
                    details: ["www.fineeng.co.ke"],
                    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/89393036-24e0-4d97-a27b-1a09f47470b3?placeholderIfAbsent=true&apiKey=d58f0417017c44eeafb1fd1e09f95bcf"
                  }
                ]}
              /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;