import SvgLogo from "../common/SVGLogo";

export default function Navbar() {
  return (
    <div className="w-screen flex justify-between items-center px-4 py-5 border-b border-neutral-300">
      <div></div>
      <div className="w-fit flex items-center justify-between">
        <div className="w-fit flex flex-col justify-center items-end gap-1">
          <h1 className="text-3xl text-slate-600 lalezar-text">ام جی ساوند</h1>
          <p className="text-slate-400 lalezar-text text-sm pr-3">فروشگاه آنلاین تجهیزات صوتی</p>
        </div>
        <SvgLogo width="100px" height="60px" color="#ab071f" />
      </div>
    </div>
  );
}
