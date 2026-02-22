package com.sunagarlabs.portfolio.contact.repository;

import com.sunagarlabs.portfolio.contact.entity.Contact;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, UUID> {
}
