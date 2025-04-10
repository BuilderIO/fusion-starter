const Index = () => {
  return (
    <>
      <div
        className="relative px-5 pt-10 pb-5 h-auto min-h-[100px]"
        style={{ maxWidth: 1200 }}
      >
        <section className="box-border relative grow self-stretch px-5 pt-10 pb-5 mx-auto my-0 w-full h-auto max-w-[1200px] min-h-[100px]">
          Welcome!
        </section>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="text-center p-10 bg-white rounded-xl shadow-sm">
          <h1 className="text-5xl font-bold text-slate-800">Hello World</h1>
        </div>
      </div>
    </>
  );
};

export default Index;
