import Image from "next/image"
import { Loader } from "lucide-react"
import { 
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
  } from "@clerk/nextjs"
import { Button } from "./ui/button"

export const Header = () => {
  return (
    <header className="h-20 w-full">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full border-b-2 border-yellow-200 px-4">
        <Image 
          src="/yellowMT.png" 
          alt="MT-Logo"
          width={40}
          height={40}
         />
      <ClerkLoading>
        <Loader className="h-5 w-5 text-amber-200 animate-spin"/>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton 
            mode="modal"
          >
          <Button >
            Login
          </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
      </div>
    </header>
  )
}
