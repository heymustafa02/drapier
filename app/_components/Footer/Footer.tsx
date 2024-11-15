import Link from "next/link";
import Image from "next/image";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        link: ['Help', 'Resources', 'Application', 'Team']
    }
]

const Footer = () => {
    return (
        <div className="bg-blue-950 -mt-40">
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className="col-span-4 md:col-span-12 lg:col-span-4">
  <img src={'/logo.svg'} alt="logo" width={130} height={130} className="pb-8" />

  {/* Social Media Icons */}
  <div className="flex gap-4">
    <Link href="http://www.linkedin.com/in/mustafamallebhari" className="footer-icons bg-blue-500 rounded-full flex items-center justify-center w-14 h-14">
      <Image src={'/assets/footer/li.svg'} alt="facebook" width={30} height={30} />
    </Link>
    <Link href="http://www.twitter.com/mallebhari_" className="footer-icons bg-blue-400 rounded-full flex items-center justify-center w-14 h-14">
      <Image src={'/assets/footer/twiiter.svg'} alt="twitter" width={30} height={30} />
    </Link>
    <Link href="https://github.com/heymustafa02" className="footer-icons bg-pink-500 rounded-full flex items-center justify-center w-14 h-14">
      <Image src={'/assets/footer/github.svg'} alt="instagram" width={30} height={30} />
    </Link> 
  </div>
</div>



                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    {/* <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                        <div className="flex gap-2">
                            <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-slate-200">925 Filbert Street Pennsylvania 18072</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-slate-200">+ 45 34 11 44 11</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-slate-200">info@gmail.com</h5>
                        </div>
                    </div> */}

                </div>

                {/* All Rights Reserved */}

                <div className='py-10 lg:flex items-center justify-center border-t border-t-bordertop'>
                    <h4 className='text-slate-200 text-lg text-center lg:text-start font-normal'>@2024 All Rights Reserved by Mustafa Mallebhari</h4>
                    {/* <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-slate-200 text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-slate-200 text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Footer;
