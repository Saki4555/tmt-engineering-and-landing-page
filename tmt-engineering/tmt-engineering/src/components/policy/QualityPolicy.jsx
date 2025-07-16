import Badge from "./Badge";

const QualityPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--color-te-back)] p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div
          className="
            bg-[var(--color-te-sec)] rounded-none p-6 md:p-10 
            transition-all duration-300
            [box-shadow:8px_8px_16px_rgba(147,197,253,0.4),-8px_-8px_16px_white]
          "
        >
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-[var(--color-te-prim)] text-lg font-medium mb-2">
              Quality Management Policy
            </h2>
            <div className="relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-te-text)] pb-4">
                We Maintain Policy For Proper Quality Management
              </h1>
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-[var(--color-te-acc)] rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Award Section */}
            <div
              className="
                p-6 rounded-xl bg-[var(--color-te-sec)]
                [box-shadow:inset_4px_4px_8px_rgba(147,197,253,0.3),inset_-4px_-4px_8px_white]
              "
            >
              <p className="text-lg leading-relaxed text-[var(--color-te-text)]">
                <span className="font-semibold text-[var(--color-te-acc)]">
                  TMT QUICK SERVICE ENGINEERING & AUTOMATION
                </span>{" "}
                has been awarded with Biz-safe level 4 by WHS council in recognition of our organization's Quality System
                Compliance since 2002.
              </p>
            </div>

            {/* Policy Description */}
            <div className="space-y-4 px-2">
              <p className="text-lg leading-relaxed text-[var(--color-te-text)]">
                We plan, implement and maintain an efficient and effective quality management system with continuous
                review and improvements. This ensures that our services and products will satisfy the requirements and
                expectations of both internal and external customers.
              </p>

              <p className="text-lg leading-relaxed text-[var(--color-te-text)]">
                You may also be interested to find out about the wide range of services and products we offer.
              </p>
            </div>

            {/* Badge */}
            <div className="flex justify-end">
              <Badge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy;
