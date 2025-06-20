import { APP_NAME } from "@/lib/constans"
export function Footer_61(){
    const currentYear = new Date().getFullYear()
    return (
        <footer className="border-t">
            <div className="p-5 flex-center">
                {currentYear} {APP_NAME}. All Rights Reserved
            </div>
        </footer>
    )
}