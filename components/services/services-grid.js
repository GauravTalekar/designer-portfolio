import Image from "next/image";

const ServicesGrid = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {services.map((service, idx) => (
        <article
          key={idx}
          className="bg-white px-8 py-6 border rounded-xl hover:shadow-md fade-in transition-all duration-500 ease-out delay-200"
          aria-labelledby={`service-title-${idx}`}
        >
          <div className="flex items-center space-x-4 mb-4">
            <figure className="w-16 h-16 flex-shrink-0">
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </figure>
            <h3
              id={`service-title-${idx}`}
              className="text-xl md:text-2xl flex-grow font-montserrat font-semibold"
            >
              {service.title}
            </h3>
          </div>

          <ul className="font-nunito list-inside">
            {service.offering.map((item, subIdx) => (
              <li key={subIdx} className="flex items-center space-x-3 text-lg">
                {/* Decorative checkmark icon */}
                <svg
                  className="shrink-0 w-3.5 h-3.5"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.686295"
                    y="12"
                    width="16"
                    height="16"
                    transform="rotate(-45 0.686295 12)"
                    fill="#EC2E90"
                  />
                </svg>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default ServicesGrid;