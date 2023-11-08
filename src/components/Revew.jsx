

const Revew = () => {
    return (
        <div>
          <h1 className="text-4xl font-bold text-center"> Blog Review</h1>
            <div className="flex gap-5 sm:flex-col md:flex-row lg:flex-row">
<div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={'https://i.ibb.co/9rqWwqS/116521839-800232863715149-6729636571760715521-n.jpg'} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
 <p>The quality of content is exceptional. Each post is well-written, engaging, and informative. The blog covers a diverse range of topics, catering to its target audience. The information presented is accurate, well-researched, and supported by relevant images, infographics, or videos, enriching the reading experience.</p>
  </div>
</div>

<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={'https://i.ibb.co/1RhG12H/269623991-1104788393259593-2189958061777799806-n.jpg'} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
 <p>The quality of content is exceptional. Each post is well-written, engaging, and informative. The blog covers a diverse range of topics, catering to its target audience. The information presented is accurate, well-researched, and supported by relevant images, infographics, or videos, enriching the reading experience.</p>
  </div>
</div>



        </div>
        </div>
    );
};

export default Revew;