export interface Patients {
    id: string;                        // ID único para el paciente
    firstName: string;                 // Nombre del paciente
    lastName: string;                  // Apellido del paciente
    gender: Gender;                   // Género del paciente (opcional)
    birthDate?: Date;                  // Fecha de nacimiento del paciente (opcional)
    nationality?: string;              // Nacionalidad del paciente (opcional)
    address?: string;                  // Dirección del paciente (opcional)
    phoneNumber?: string;              // Teléfono del paciente (opcional)
    email?: string;                    // Email del paciente (opcional)
    medicalInfo?: string;              // Información médica del paciente (opcional)
    profilePicture?: Blob;             // Foto de perfil del paciente (opcional)
}

export enum Gender{
    Male = "Masculino",
    Female = "Femenino",
    Other = "Otro",
}