import { useContext } from "react";
import { SectionContext } from "./SectionContext";

export const Menu = ({ menuOpened, setMenuOpened }) => {
  const { section, setSection } = useContext(SectionContext);

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-[#426e4d] w-11 h-11 rounded-md cursor-pointer"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white opacity-80 transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton
            label="Accueil"
            onClick={() => {
              setSection(0), setMenuOpened(!menuOpened);
            }}
          />
          <MenuButton
            label="Projet"
            onClick={() => {
              setSection(1), setMenuOpened(!menuOpened);
            }}
          />
          <MenuButton
            label="Competence"
            onClick={() => {
              setSection(2), setMenuOpened(!menuOpened);
            }}
          />
          <MenuButton
            label="Contact"
            onClick={() => {
              setSection(3), setMenuOpened(!menuOpened);
            }}
          />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-[#426e4d]  transition-colors"
    >
      {label}
    </button>
  );
};
