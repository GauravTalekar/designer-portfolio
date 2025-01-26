import { services } from "@/data/services"
import Image from "next/image"

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="p-4">
          <div className="flex items-center mb-4">
            <Image 
              src={service.icon}
              alt={`${service.title} icon`}
              className="w-16 h-16 mr-4"
              height={512}
              width={512}
            />
            <h3 className="text-2xl font-montserrat font-semibold">{service.title}</h3>
          </div>
          <ul className="font-nunito flex flex-wrap">
            {service.offering.map((item, idx) => (
              <li key={idx} className="inline text-lg">{item}{" "}{idx < service.offering.length - 1 && <span className="text-lg mx-2">◆</span>}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ServicesGrid