import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { LoginResponse } from "../interfaces/login-response.interface";

@Injectable()
export class AuthService {

    public registerForm: FormGroup = this._fb.group({
        username: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    public loginForm: FormGroup = this._fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    constructor(private _fb: FormBuilder, private _http: HttpClient) {}

    public onRegister(form: FormGroup): Observable<{message: string}> {
        return this._http.post<{message: string}>(environment.apiUrl + 'register', form);
    }

    public onLogin(form: FormGroup): Observable<LoginResponse> {
        return this._http.post<LoginResponse>(environment.apiUrl + 'login', form);
    }

}