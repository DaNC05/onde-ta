'use client'

import { Bell, ChevronDown, Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import React, { useState } from "react"



type headerProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ isMenuOpen, setIsMenuOpen }: headerProps) => {

    return (
        <header className="flex justify-between p-4 border-b border-gray-200">
            <div className="">
                <Menu className="h-6 w-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            <div className="inline-flex gap-4 items-center">
                <Button>+ Nova Encomenda</Button>
                <Bell />
                <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="inline-flex gap-1 items-center">Pedro Silva <ChevronDown className="h-4 w-4" /></p>

            </div>
        </header>



    )

}