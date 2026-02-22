package com.sunagarlabs.portfolio.contact.service.impl;

import com.sunagarlabs.portfolio.contact.dto.ContactResponse;
import com.sunagarlabs.portfolio.contact.dto.CreateContactRequest;
import com.sunagarlabs.portfolio.contact.entity.Contact;
import com.sunagarlabs.portfolio.contact.repository.ContactRepository;
import com.sunagarlabs.portfolio.contact.service.ContactService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    @Override
    public ContactResponse createContact(CreateContactRequest request) {
        log.info("Creating contact submission for email={}", request.email());

        Contact contact = new Contact();
        contact.setName(request.name());
        contact.setEmail(request.email());
        contact.setMessage(request.message());

        Contact saved = contactRepository.save(contact);
        return ContactResponse.builder()
                .id(saved.getId())
                .name(saved.getName())
                .email(saved.getEmail())
                .message(saved.getMessage())
                .createdAt(saved.getCreatedAt())
                .build();
    }
}
