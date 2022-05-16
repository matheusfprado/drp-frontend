import CPFInput from '@/components/forms/cpfInput/CPFInput'
import { usePlausible } from 'next-plausible'
import { Anchor } from '../components/elements'
import { PageLayout } from '../components/layouts/partials'
import { siteMeta } from '../config/general'



export default function Home() {
  const plausible = usePlausible()

  return (
    <PageLayout
      fullTitle='Welcome to your Next site!'
      className='flex flex-col items-center justify-center min-h-screen content-wrapper'
    >

      <div className='container relative px-4 mx-auto'>
        <div className='max-w-2xl mx-auto text-center'>
          <p className='my-4 text-xl leading-8 text-gray-900 lg:mb-6 dark:text-gray-300'>
            {siteMeta.description}. <br />
            Pre-configured with TailwindUI and some additional components.
          </p>
          <CPFInput title={'CPF'} name={'documentNumber'} register={undefined} useSchema={true}/>

          <div className='flex justify-center py-8 mx-auto space-x-4'>
            <Anchor href='/empty' className='inline-block px-5 text-sm btn btn--primary btn--md'>
              Empty page
            </Anchor>
            <Anchor
              href='https://vercel.com/new/clone?repository-url=https://github.com/riipandi/next-tailwind-starter&project-name=next-tailwind-starter&repo-name=next-tailwind-starter&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_MAINTENANCE_MODE'
              className='inline-block w-full px-5 text-sm btn btn--outline btn--md'
              onClick={() => plausible('Deploy to Vercel')}
            >
              Deploy your own
            </Anchor>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
