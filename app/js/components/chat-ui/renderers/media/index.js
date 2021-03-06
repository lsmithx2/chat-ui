export {ChatMedia} from './chat-media.element'

export const MediaItem = ({avatar, image}) => `
  <figure>
    <chat-image src="${image}"></chat-image>
    <figcaption>
      <chat-avatar src='${avatar}'></chat-avatar>
    </figcaption>
  </figure>
`

export const ImageTemplate = ({mine = false, author, image}) => `
  <chat-media
    ${mine ? 'mine' : ''}
    avatar='${author.avatar}'
    image='${image}'
  ></chat-media>
`