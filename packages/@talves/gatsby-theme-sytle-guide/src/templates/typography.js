/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui';
import { TypeScale, TypeStyle } from '../components/index';

const Row = props => (
  <div
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'baseline',
      flexWrap: 'wrap',

      width: '100%',
      mx: -30,
      '& > div': {
        px: 30,
      },
    }}
  />
);

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

export default props => {
  const { theme } = useThemeUI();
  const { fonts, fontWeights, lineHeights } = theme;

  return (
    <section id="typography">
      <Styled.h2 sx={{ color: 'text' }}>Typography</Styled.h2>
      {fonts && (
        <StyleSection>
          <Styled.h3 sx={{ color: 'text' }}>Font Families</Styled.h3>
          <Row>
            {Object.keys(fonts).map(name => (
              <div key={name}>
                <TypeStyle
                  fontFamily={name}
                  fontSize={6}
                  sx={{ color: 'text' }}
                >
                  Aa
                </TypeStyle>
                <Styled.code title={fonts[name]}>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </StyleSection>
      )}
      <StyleSection>
        <Styled.h3 sx={{ color: 'text' }}>Font Sizes</Styled.h3>
        <TypeScale />
      </StyleSection>
      {fontWeights && (
        <StyleSection>
          <Styled.h3 sx={{ color: 'text' }}>Font Weights</Styled.h3>
          <Row>
            {Object.keys(fontWeights).map(name => (
              <div key={name}>
                <TypeStyle
                  fontSize={6}
                  fontWeight={name}
                  sx={{ color: 'text' }}
                >
                  {fontWeights[name]}
                </TypeStyle>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </StyleSection>
      )}
      {lineHeights && (
        <StyleSection>
          <Styled.h3 sx={{ color: 'text' }}>Line Heights</Styled.h3>
          <Row>
            {Object.keys(lineHeights).map(name => (
              <div key={name}>
                <TypeStyle
                  fontSize={6}
                  lineHeight={name}
                  sx={{ color: 'text' }}
                >
                  {lineHeights[name]}
                </TypeStyle>
                <Styled.code>{name}</Styled.code>
              </div>
            ))}
          </Row>
        </StyleSection>
      )}
    </section>
  );
};
