import PropTypes from 'prop-types';

import { Section, SectionList, SectionItem, Title } from "./Statistics.styled"

export const Statistics = ({ stats, title }) => {

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }

    function onTitleRender() {
      if (title !== undefined) {
      return <Title className="title">{title}</Title>
      }
      return;
    }
    
return(
<Section className="statistics">
{onTitleRender()}
<SectionList>
    {stats.map(({label, id, percentage}) => {
    return <SectionItem key={id} id={id} className="item" color={getRandomHexColor()}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
    </SectionItem>
    })}
</SectionList>
</Section>

)}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };