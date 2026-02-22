package com.sunagarlabs.portfolio.contact.controller;

import com.sunagarlabs.portfolio.contact.dto.ContactResponse;
import com.sunagarlabs.portfolio.contact.dto.CreateContactRequest;
import com.sunagarlabs.portfolio.contact.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ContactResponse createContact(@Valid @RequestBody CreateContactRequest request) {
        return contactService.createContact(request);
    }
}
