import { CSSProperties } from 'react';
import { NavLink } from 'react-router';

const navTargets: { to: string; label: string }[] = [
  {
    to: '/books',
    label: 'Books',
  },
  {
    to: '/about',
    label: 'About',
  },
];

export const Navbar = () => {
  return (
    <ul>
      {navTargets.map(({ to, label }) => (
        <li key={to}>
          <NavLink to={to} style={({ isActive }) => (isActive ? styles.active : styles.link)}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const styles: Record<string, CSSProperties> = {
  link: {},
  active: {
    textDecoration: 'underline',
    color: 'blue',
  },
};
