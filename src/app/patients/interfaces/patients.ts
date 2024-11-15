export interface Patients {
    id: number;                        // ID único para el paciente
    firstName: string;                 // Nombre del paciente
    lastName: string;                  // Apellido del paciente
    gender?: string;                   // Género del paciente (opcional)
    birthDate?: Date;                  // Fecha de nacimiento del paciente (opcional)
    nationality?: string;              // Nacionalidad del paciente (opcional)
    address?: string;                  // Dirección del paciente (opcional)
    phoneNumber?: string;              // Teléfono del paciente (opcional)
    email?: string;                    // Email del paciente (opcional)
    medicalInfo?: string;              // Información médica del paciente (opcional)
    profilePicture?: Blob;             // Foto de perfil del paciente (opcional)
}
