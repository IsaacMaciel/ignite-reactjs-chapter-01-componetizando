import "../styles/sidebar.scss";
import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[];
  handleClick(id: number): void;
  selected: any;
}

const SideBar = ({ genres, handleClick, selected }: SideBarProps) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selected === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export { SideBar };


