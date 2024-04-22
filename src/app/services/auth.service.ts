import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

    public registerForm: FormGroup = this._fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]]
    });

    constructor(private _fb: FormBuilder, private _http: HttpClient) {}

    public onRegister(form: FormGroup): Observable<any> {
        return this._http.post(environment.apiUrl + 'register', form);
    }

}