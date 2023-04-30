import PropTypes from 'prop-types';
import { StatisticContainer,UploadStats,StatsList,StatsListItem,StatsListItemLabel,StatsListItemPercentage } from './Statistc.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticContainer>
  {title && <UploadStats>{title}</UploadStats>}
        
<StatsList>
          {stats.map(({id, label, percentage }) => (
        <StatsListItem key={id} >
      <StatsListItemLabel>{label}</StatsListItemLabel>
      <StatsListItemPercentage>{percentage}</StatsListItemPercentage>
    </StatsListItem>
      ))} 
    </StatsList>
  </StatisticContainer>
  )  
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

