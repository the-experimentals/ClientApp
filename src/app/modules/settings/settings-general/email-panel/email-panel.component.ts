import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { faAt, faEnvelopeSquare, faKey, faTimes, faUserSecret } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'email-panel',
  templateUrl: './email-panel.component.html',
  styleUrls: ['./email-panel.component.scss']
})
export class EmailPanelComponent implements OnInit {

  faTimes = faTimes
  faKey = faKey
  faUserSecret = faUserSecret
  faAt = faAt
  faEnvelopeSquare = faEnvelopeSquare

  emailConfigForm: UntypedFormGroup
  constructor(private formBuilder:UntypedFormBuilder) {
    this.emailConfigForm = this.createEmailConfigForm()
   }

  ngOnInit(): void {
  }

  createEmailConfigForm(): UntypedFormGroup{
    return this.formBuilder.group({
      'HOST': new UntypedFormControl('', [Validators.required]),
      'API_KEY': new UntypedFormControl('', [Validators.required]),
      'API_SECRET': new UntypedFormControl('', [Validators.required]),
      'PORT': new UntypedFormControl('', [Validators.required]),
      'SSL': new UntypedFormControl(false, [Validators.required]),
      'TLS': new UntypedFormControl(false, [Validators.required]),
      'SENDER_NAME': new UntypedFormControl('', [Validators.required]),
      'SENDER_EMAIL': new UntypedFormControl('', [Validators.required]),
      'TEST_EMAIL': new UntypedFormControl('', [Validators.required]),
    })
  }

}
