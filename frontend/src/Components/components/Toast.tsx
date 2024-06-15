import { toast } from "sonner";
import { styles } from "@/style/ToastStyle";

export const successToast = (message: string) => {
    toast.success(message || "Archivo borrado con éxito", {
        position: "bottom-center",
        duration: 3000,
        style: styles.successToast,
    })
};

export const errorToast = (message: string) => {
    toast.error(message || "Error al enviar el archivo", {
        position: "bottom-center",
        duration: 3000,
        style: styles.errorToast,
    });
}

export const loadingToast = (message: string) => {
    toast.loading(message || "Cargando archivo...", {
        position: "bottom-center",
        duration: 1000,
        style: styles.loadingToast,
    });
}
