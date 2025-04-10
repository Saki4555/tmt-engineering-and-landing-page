

import Badge from "./Badge"

const QualityPolicy = () => {


  return (
    <div className="min-h-screen bg-[#F0FDF4] p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-[#F0FDF4] rounded-2xl p-6 md:p-10 neu-shadow transition-all duration-300">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-te-prim text-lg font-medium mb-2">Quality Management Policy</h2>
            <div className="relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-te-text pb-4">
                We Maintain Policy For Proper Quality Management
              </h1>
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#16A34A] rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Award Section */}
            <div className="p-6 rounded-xl bg-[#F0FDF4] neu-shadow-inset">
              <p className="text-lg leading-relaxed text-te-text">
                <span className="font-semibold  text-te-acc">TMT QUICK SERVICE ENGINEERING & AUTOMATION</span> has
                been awarded with Biz-safe level 4 by WHS council in recognition of our organization's Quality System
                Compliance since 2002.
              </p>
            </div>

            {/* Policy Description */}
            <div className="space-y-4 px-2">
              <p className="text-lg leading-relaxed text-te-text">
                We plan, implement and maintain an efficient and effective quality management system with continuous
                review and improvements. This ensures that our services and products will satisfy the requirements and
                expectations of both internal and external customers.
              </p>

              <p className="text-lg leading-relaxed text-te-text">
                You may also be interested to find out about the wide range of services and products we offer.
              </p>
            </div>

           
           

            <div className="flex justify-end">
            <Badge />
            </div>
           
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default QualityPolicy

