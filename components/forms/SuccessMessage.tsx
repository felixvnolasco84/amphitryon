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
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={`text-black-400 text-left text-5xl font-medium md:mb-3 md:leading-relaxed lg:mb-6 lg:text-6xl lg:leading-[70px] xl:mb-12 xl:text-7xl`}
          >
            ¡GRACIAS! <br /> NOS COMUNICAREMOS CONTIGO
          </DialogTitle>
          <DialogDescription
            className={`text-black-500 text-xl leading-none lg:text-4xl`}
          >
            <div className="flex flex-col gap-[28px]">
              <Link className="text-left text-3xl xl:text-4xl" href={"/"}>
                Regresar al inicio.
              </Link>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
