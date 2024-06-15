import { PORT } from "./src/config";
import { server } from "./src/server";

const leveServer = () => {
    try {
        server.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error: any) {
        console.log(`Error al subir el servidor ${error}`);
    }
};

leveServer();
