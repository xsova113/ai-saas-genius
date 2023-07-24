import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="px-4 md:px-10 md:mx-12 mt-24 bg-gradient-to-r from-violet-700 via-purple-700 to-sky-600 md:rounded-xl md:my-40 mb-20 md:py-24 py-14 ">
      <h2 className="text-center text-3xl md:text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="carousel carousel-center text-center max-w-xs p-4 space-x-4 rounded-box min-w-full">
        {testimonials.map((item, index) => (
          <div
            key={item.description}
            id={`item${index}`}
            className="carousel-item max-md:w-full relative"
          >
            <Card className="bg-white/40 border-none drop-shadow text-slate-200 w-full md:w-72">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2 justify-center">
                  <div>
                    <p className="text-xl font-black">{item.name}</p>
                    <p className="text-slate-600 mt-1 font-bold text-sm">
                      {item.title}
                    </p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  <span className="text-slate-300 font-bold text-lg">
                    &quot;
                  </span>
                  {item.description}
                  <span className="text-slate-300 font-bold text-lg">
                    &quot;
                  </span>
                </CardContent>
              </CardHeader>
            </Card>
            <div className="md:hidden absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
              <a
                href={`#item${
                  index === 0 ? (index = testimonials.length - 1) : index - 1
                }`}
                className="btn btn-circle bg-opacity-30 border-none btn-sm"
              >
                ❮
              </a>
              <a
                href={`#item${
                  index === testimonials.length - 1
                    ? index - testimonials.length + 1 || index - 2
                    : index + 1
                }`}
                className="btn btn-circle border-none bg-opacity-30 btn-sm"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
