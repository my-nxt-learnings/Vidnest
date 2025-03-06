import {Link} from 'react-router-dom'

import {GrChannel} from 'react-icons/gr'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import './index.css'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <div className="logo-channelname">
                    <GrChannel size={15} />
                    <ChannelName color={textColor}>{name}</ChannelName>
                  </div>
                </ContentSection>
              </VideoDetails>
              <ViewsAndDate color={textColor}>
                <div> {viewCount} views </div> <div> {publishedAt} </div>
              </ViewsAndDate>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
