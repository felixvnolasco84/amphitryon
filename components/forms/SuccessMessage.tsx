import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function SuccessMessage() {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="border-black bg-black/90 p-16 text-white lg:p-24">
        <DialogHeader>
          <DialogTitle
            className={`text-center text-xl font-medium md:mb-3 lg:mb-6 lg:text-3xl`}
          >
            <div className="flex flex-col items-center gap-2">
              <p>¡GRACIAS!</p>
              <p className="text-base text-gray-300">NOS COMUNICAREMOS CONTIGO</p>
            </div>
          </DialogTitle>
          {/* <DialogDescription
            className={`text-black-500 text-xl leading-none lg:text-4xl`}
          >
            <div className="flex flex-col gap-[28px]">
              <Link className="text-left text-3xl xl:text-4xl" href={"/"}>
                Regresar al inicio.
              </Link>
            </div>
          </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
