import Image from 'next/image'
import data from './data/mock.json'
import LinkButton from './components/LinkButton'
import { GitHubIcon, TwitterIcon } from './components/SocialButton'
export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center mx-auto mt-16 w-full '>
      <div className='w-24 h-24 rounded-full overflow-hidden'>
        <Image src={data.user.profileImage} alt={data.user.name} width={96} height={96} />
      </div>
      <h1 className='text-2xl font-bold mt-4 mb-4'>{data.user.name}</h1>
      {data.links.map((social) => (<LinkButton key={social.id} href={social.url} title={social.title} image={social.image} />))}
      <div className='flex item-center gap-1 mt-8'>
        {data.links.map((social) => {
          if (social.url.includes('twitter')) { return <TwitterIcon /> }
          if (social.url.includes('github')) { return <GitHubIcon /> }
        })}
      </div>
    </div>
  )
}
