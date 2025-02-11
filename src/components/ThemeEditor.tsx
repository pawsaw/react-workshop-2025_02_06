import { useTheme } from '../domain/theme';

export const ThemeEditor = () => {
  const { setPrimaryColor } = useTheme();
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <button
        style={{ backgroundColor: 'tomato', width: 4, height: 4, borderRadius: 2 }}
        onClick={() => setPrimaryColor('tomato')}
      ></button>
      <button style={{ backgroundColor: 'blue' }} onClick={() => setPrimaryColor('blue')}></button>
    </div>
  );
};
