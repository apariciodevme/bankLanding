import { stats } from "@/utils/constants";

const Stats = () => {
  return (
    <section className="flex flex-col items-center p-10 md:flex-row md:space-y-0 space-y-14 md:space-x-16 ">

      {stats.map((item) => (
        <div className="flex flex-row items-center space-x-5" key={item.id}>
          <h1 className="text-3xl">{item.value}</h1>
          <p className="text-sm text-transparent uppercase bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-100">
            {item.title}
          </p>
          <div className="w-[1.8px] h-3 bg-gray-400 hidden " />

        </div>
      ))}
    </section>
  );
};

export default Stats;
