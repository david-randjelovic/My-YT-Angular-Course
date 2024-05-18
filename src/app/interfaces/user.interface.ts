export interface User {
    created_at: string,
    departement: string | null,
    email: string,
    email_verified_at: string | null,
    id: number,
    job_title: string | null,
    location: string | null,
    name: string,
    organization: string | null,
    phone: string,
    profile_picture: string | null,
    updated_at: string
}