import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const ThumbNailImage = styled.img`
  width: 90%;
  border-radius: 8px;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  height: 35px;
  overflow: hidden;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  margin-left: 5px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 12px;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
