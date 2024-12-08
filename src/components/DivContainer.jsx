import React from "react";

export default function DivContainer({
  company,
  role,
  description,
  year,
  pointer = false,
  projects = false,
  tech = [],
  link = null,
  img,
}) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={`flex items-center mb-10 gap-2 ${
        pointer ? "cursor-pointer div-container" : ""
      }`}
      onClick={handleClick}
    >
      {img ? (
        <div>
          <div className=" md:block h-[80px] w-[104px] bg-red-400">
            <img src={img} alt="" className="h-full w-full" />
          </div>
        </div>
      ) : null}
      <div className="w-full">
        <p
          id=""
          className="text-[#94a3b8] sm:block lg:hidden md:hidden font-bold text-sm"
        >
          {year}
        </p>
        <div className="flex items-center">
          <p id="" className="text-white text-sm font-bold">
            {company} |{" "}
          </p>{" "}
          {role ? (
            <p id="" className="text-[#94a3b8] text-sm ml-1">
              {role} |{" "}
            </p>
          ) : null}
          <p
            id=""
            className="text-[#94a3b8] hidden lg:block md:block font-bold text-sm ml-1"
          >
            {year}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-[#94a3b8] text-sm">{description}</p>
        </div>
        {projects ? (
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((item, index) => (
              <div>
                <span
                  key={index}
                  className="text-sm pl-2 pr-2 bg-slate-500 capitalize text-white rounded-lg flex-1 sm:flex-none sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
