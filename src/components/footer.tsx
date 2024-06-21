import React from 'react'
import EmailIcon from './svgs/GithubIcon'
import InstagramIcon from './svgs/InstagramIcon'
import LinkedInIcon from './svgs/LinkedInIcon'
import GithubIcon from './svgs/GithubIcon'
import Image from 'next/image'
import { assetsPrefix } from '@/lib/helper'

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-black ">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="/" className="flex justify-center space-x-3 lg:justify-start p-5">
				<div className="flex items-center justify-center w-12 h-12 rounded-full">
					<Image 
                    src = "https://sceptix-club.github.io/website-assets/icons/logo_square.png"
                    width = {100}
                    height = {100}
                    alt = {"Logo"}
                    className='bg-white rounded-full'
                    />
				</div>
				<span className="self-center text-2xl font-semibold font-fira_sans"> The sceptix club</span>
			</a>
		</div>
		<div className="w-full grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 place-self-center ">
			{/* <div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div> */}
			{/* <div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div> */}
			{/* <div className="space-y-3">
				<h3 className="uppercase dark:text-gray-900">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div> */}
			<div className="space-y-3 flex flex-col w-96 justify-end items-center ">
				<div className="uppercase text-white">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="https://www.instagram.com/the_sceptix_club" title="Instagram" className="flex items-center p-1">
						<InstagramIcon/>
					</a>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/company/sceptix" title="LinkedIn" className="flex items-center p-1">
						<LinkedInIcon/>
					</a>
                    <a rel="noopener noreferrer" href="https://github.com/sceptix-club" title="Github" className="flex items-center p-1">
						<GithubIcon/>
					</a>
                    {/* <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center p-1">
						<EmailIcon/>
					</a> */}
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark: text-neutral-200">© 2024 sceptix . All rights reserved.</div>
</footer>
  )
}

export default Footer
