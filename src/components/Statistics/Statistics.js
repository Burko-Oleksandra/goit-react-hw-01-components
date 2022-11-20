import PropTypes from 'prop-types';
import { Wrapper, Stats, Item, Label } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      <Stats>
        {stats.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <span className="percentage">{item.percentage}%</span>
          </Item>
        ))}
      </Stats>
    </Wrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
