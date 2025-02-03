import Image from "next/image"

const ServicesGrid = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-white px-8 py-6 border rounded-xl hover:shadow-md fade-in transition-all ease-out duration-500 delay-200"
        >
          <div className="mb-4">
            <Image
              src={service.icon}
              alt={`${service.title} icon`}
              className="w-16 h-16 mr-4"
              height={512}
              width={512}
            />
          </div>
          <h3 className="text-2xl font-montserrat font-semibold mb-4">{service.title}</h3>
          <ul className="font-nunito list-inside">
            {service.offering.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-lg">
                <svg className="shrink-0 w-3.5 h-3.5" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.686295" y="12" width="16" height="16" transform="rotate(-45 0.686295 12)" fill="#EC2E90" />
                </svg>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ServicesGrid