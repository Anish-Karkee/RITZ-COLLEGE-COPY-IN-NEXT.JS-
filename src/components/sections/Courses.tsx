"use client";

import { ChefHat, CookingPot, UtensilsCrossed } from "lucide-react";


const courses = [
    {
        title: "Diploma in Culinary Arts (DCA)",
        subtitle: "(Level III, IV, V)",
        description: "Affiliated to CTEVT, Nepal & IAMA, India (DCA)",
        icon: ChefHat,
    },
    {
        title: "Diploma in Hotel Management (DHM)",
        subtitle: "(Level III, IV, V)",
        description: "Affiliated to CTEVT, Nepal & IAMA, India (DHM)",
        icon: UtensilsCrossed,
    },
];

const Courses = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => {
                        const Icon = course.icon;
                        return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white px-8 py-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-[30px] font-bold text-gray-900 leading-snug">
                    {course.title}
                  </h3>

                  {course.subtitle && (
                    <p className="mt-1 text-lg font-semibold text-gray-500">
                      {course.subtitle}
                    </p>
                  )}

                  <Icon
                    size={62}
                    strokeWidth={1.8}
                    className="my-8 text-blue-700"
                  />

                  <p className="text-base leading-7 text-gray-500">
                    {course.description}
                  </p>
                </div>
              </div>
            );
          
                    })}
                </div>
            </div>
        </section>
    );
};

export default Courses;