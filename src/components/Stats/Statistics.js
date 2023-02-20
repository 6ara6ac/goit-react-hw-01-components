import { Section, SectionList, SectionItem, Title } from "./Statistics.styled"

export const Statistics = ({ stats, title }) => {

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }
    

return(
<Section className="statistics">
<Title className="title">{title}</Title>
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