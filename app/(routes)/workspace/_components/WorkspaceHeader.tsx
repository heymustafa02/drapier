"use client "
import { Button } from '@/components/ui/button'
import { ChevronLeft, Link, Save } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function WorkspaceHeader({onSave}:any) {

  const router = useRouter(); // Initialize the router

  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
  };
  
  return (
    <div className='p-3 border-b flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
      <button onClick={handleGoBack} className='flex items-center'>
          <ChevronLeft className='h-5 w-5' /> {/* You can adjust the size here */}
        </button>     
         <Image src={'/logo.svg'}
          alt='logo'
          height={40}
          width={40} />
        <h2>Filee</h2>
      </div>
      <div className='flex items-center gap-4'>
        <Button className='h-8 text-[12px]
        gap-2 bg-yellow-500 hover:bg-yellow-600'
        onClick={()=>onSave()}
        > 
        <Save className='h-4 w-4' /> Save </Button>
        <Button className='h-8 text-[12px]
        gap-2 bg-blue-600 hover:bg-blue-700'>
          Share <Link className='h-4 w-4' /> </Button>
      </div>
    </div>
  )
}

export default WorkspaceHeader