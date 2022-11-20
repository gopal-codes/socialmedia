import { useFetchData } from '../../allFunctions/useAllfunctions';
import Posts from '../post/Posts'
import ShareContainer from '../sharecontainer/ShareContainer'
import {  Wrapper } from './CenterComponent.styled'

const CenterComponent = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const {data:posts } = useFetchData(`http://localhost:8800/api/posts/timeline/${user._id}`)

  return (
    <Wrapper>
      <ShareContainer />
      {posts.map((posts)=>
      <Posts key={posts._id} posts={posts} />
      )
      }
    </Wrapper>
  )
}

export default CenterComponent