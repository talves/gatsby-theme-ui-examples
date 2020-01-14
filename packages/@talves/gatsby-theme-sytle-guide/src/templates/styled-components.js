/** @jsx jsx */
import { jsx, Styled, useThemeUI, Box } from 'theme-ui';

const StyleSection = props => {
  const { theme = { colors: { text: 'black' } } } = useThemeUI();

  return (
    <div
      {...props}
      sx={{
        marginLeft: '40px',
        marginTop: '1rem',
        padding: '0.5rem',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: `${theme.colors.text}`,
      }}
    >
      {props.children}
    </div>
  );
};

const voidTags = ['hr', 'input', 'br', 'img', 'area'];

export default props => {
  const { theme } = useThemeUI();

  return (
    <section id="styled-components">
      <Styled.h2 sx={{ color: 'text' }}>Styled Components</Styled.h2>
      {theme.styles && (
        <div>
          {Object.keys(theme.styles).map(name => {
            if (voidTags.indexOf(name) >= 0) return null;
            const Display = Styled[name] || Box;
            return (
              <StyleSection key={name}>
                <Styled.h3 sx={{ color: 'text' }}>{`Styled.${name}`}</Styled.h3>
                <Display
                  sx={{ color: 'text' }}
                >{`Example of <Styled.${name}>`}</Display>
              </StyleSection>
            );
          })}
        </div>
      )}
    </section>
  );
};
